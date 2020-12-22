export declare const searchSettings: {
    analysis: {
        analyzer: {
            autocomplete_analyzer: {
                tokenizer: string;
                filter: string[];
            };
            autocomplete_search_analyzer: {
                tokenizer: string;
                filter: string[];
            };
        };
        tokenizer: {
            autocomplete: {
                type: string;
                min_gram: number;
                max_gram: number;
                token_chars: string[];
            };
        };
    };
};
