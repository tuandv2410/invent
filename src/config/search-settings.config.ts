export const searchSettings = {
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
}