"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSettings = void 0;
exports.searchSettings = {
    analysis: {
        analyzer: {
            autocomplete_analyzer: {
                tokenizer: 'autocomplete',
                filter: ['lowercase'],
            },
            autocomplete_search_analyzer: {
                tokenizer: 'keyword',
                filter: ['trim', 'lowercase'],
            },
        },
        tokenizer: {
            autocomplete: {
                type: 'edge_ngram',
                min_gram: 1,
                max_gram: 30,
                token_chars: ['letter', 'digit', 'whitespace'],
            },
        },
    }
};
//# sourceMappingURL=search-settings.config.js.map