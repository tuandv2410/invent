export declare class SearchResultBase<T> {
    hits: {
        total: number;
        hits: Array<{
            _source: T;
        }>;
    };
}
