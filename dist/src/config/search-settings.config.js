"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSettings = void 0;
exports.searchSettings = {
    analysis: {
        filter: {
            autocomplete_filter: {
                type: "edge_ngram",
                min_gram: 3,
                max_gram: 20
            }
        },
        analyzer: {
            autocomplete: {
                type: "custom",
                tokenizer: "standard",
                filter: [
                    "lowercase",
                    "autocomplete_filter"
                ]
            }
        }
    }
};
//# sourceMappingURL=search-settings.config.js.map