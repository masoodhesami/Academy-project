import _ from "lodash"

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).take(pageSize).slice(startIndex).value();
}