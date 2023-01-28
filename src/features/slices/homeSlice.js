import { EVENTS } from "../../app/shared/EVENTS";

export const selectFeaturedEvent = () => {
    return EVENTS.find((featured) => featured);
}

export const selectAllEvents = () => {
    return EVENTS;
}

export const selectEventsById = (id) => {
    return EVENTS.filter(
        (event) => event.id === parseInt(id)
    );
}
