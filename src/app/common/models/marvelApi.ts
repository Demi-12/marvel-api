export class MarvelResponse<T> {
    code?: number
    status?: string;
    copyright?: string;
    attributionText: string = ''
    attributionHTML: string = '';
    data?: MarvelData<T>;
    etag?: string;
}

export class MarvelData<T> {
    count?: number;
    limit?: number;
    offset?: number;
    results?: T;
    total?: number;
}


export enum ORDER_BY {
    NAME_ASC = "name",
    NAME_DESC = "-name",
    MODIFIED_ASC = "modified",
    MODIFIED_DESC = "-modified",

}

export class MarvelFilters {
    name?: string;
    nameStartsWith?: string;
    modifiedSince?: Date;
    comics?: number[];
    series?: number[];
    events?: number[];
    stories?: number[];
    orderBy?: ORDER_BY;
    limit?: number;
    offset?: number;
}

