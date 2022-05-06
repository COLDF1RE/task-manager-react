import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import { getEvents, addEvent, editEvent, deleteEvent, clearArchive } from "../api";
import moment from 'moment';


class EventsStore {
    data = [];


    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
            // archiveData: computed,
            // notArchiveData: computed,
        });

        onBecomeObserved(this, 'data', this.fetch);
    }

    get allData() {
        return this.data
    }

    get archiveData() {
        return this.data
            .filter(x => x.archive)
    }

    get notArchiveData() {
        return this.data
            .filter(x => !x.archive)
    }

    get pastData(){
        return this.data
            .filter(x => moment(x.date).isBefore(moment(), 'day'))
    }

    get todayData(){
        return this.data
            .filter(x => moment(x.date).isSame(moment(), 'day'))
    }

    get futureData(){
        return this.data
            .filter(x => moment(x.date).isAfter(moment(), 'day'))
    }

    get favoriteData () {
        return this.data
            // .map(event => new EventStore(event))
            // .filter(x => x.favorite && !x.archive)
            .filter(x => x.favorite)
    }

    // Сортировка работает совместно с фильтрацией.
    get newerDataSorting () {
        return this.filteredData
            .slice()
            .sort((a, b) => moment(b.date) - moment(a.date))
    }

    *fetch() {
        const response = yield getEvents();
        this.data = response
        this.filteredData = response.filter(x => !x.archive)
        // this.data = response.map(event => new EventStore(event));
        // this.filteredData = response.map(event => new EventStore(event)).filter(x => !x.archive);
    }

    *addEvent(data) {
        yield addEvent(data)
        yield this.fetch();
    }

    *editEvent(data) {
        yield editEvent(data);
        yield this.fetch();
    }

    *deleteEvent(id) {
        yield deleteEvent(id)
        yield this.fetch();
    }

    *clearArchive() {
        yield clearArchive()
        yield this.fetch();
    }
}

export const events = new EventsStore();
