export declare const searchSettings: {
    analysis: {
        filter: {
            autocomplete_filter: {
                type: string;
                min_gram: number;
                max_gram: number;
            };
        };
        analyzer: {
            autocomplete: {
                type: string;
                tokenizer: string;
                filter: string[];
            };
        };
    };
};
