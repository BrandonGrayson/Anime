export interface Anime {
    id: string;
    type: string;
    links: {
        self: string;
    }
    attributes: {
        createdAt: string;
        updatedAt: string;
        slug: string;
        synopsis: string;
        description: string;
        titles: {
            en: string;
            en_jp: string;
            ja_jp: string;
        }
        coverImageTopOffset: number;
        canonicalTitle: string;
        abbreviatedTitles: string[];
        averageRating: string;
        ratingFrequencies: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        userCount: number;
        favoritesCount: number;
        startDate: string;
        endDate: string | null;
        nextRelease: string;
        popularityRank: number;
        ratingRank: number;
        ageRating: string;
        ageRatingGuide: string;
        subtype: string;
        status: string;
        tba: null;
        posterImage: {
            tiny: string;
            large: string;
            small: string;
            medium: string;
            original: string;
            meta: {
                dimensions: {
                    tiny: {
                        width: number;
                        height: number;
                    };
                    large: {
                        width: number;
                        height: number;
                    };
                    small: {
                        width: number;
                        height: number;
                    };
                    medium: {
                        width: number;
                        height: number;
                    }
                };
            }
        }
        coverImage: {
            tiny: string;
            large: string;
            small: string;
            original: string;
            meta: {
                dimensions: {
                    tiny: {
                        "width": 840,
                        "height": 200
                    },
                    large: {
                        "width": 3360,
                        "height": 800
                    },
                    small: {
                        "width": 1680,
                        "height": 400
                    }
                }
            }
        };
        episodeCount: number | null;
        episodeLength: number;
        totalLength: number;
        youtubeVideoId: string;
        showType: string;
        nsfw: boolean;
    };
    relationships: {
        genres: {
            links: {
                self: string;
                related: string;
            }
        };
        categories: {
            links: {
                self: string;
                related: string;
            }
        };
        castings: {
            links: {
                self: string;
                related: string;
            }
        };
        installments: {
            links: {
                self: string;
                related: string;
            }
        };
        mappings: {
            links: {
                self: string;
                related: string;
            }
        };
        reviews: {
            links: {
                self: string;
                related: string;
            }
        };
        mediaRelationships: {
            links: {
                self: string;
                related: string;
            }
        };
        characters: {
            links: {
                self: string;
                related: string;
            }
        };
        staff: {
            links: {
                self: string;
                related: string;
            }
        };
        productions: {
            links: {
                self: string;
                related: string;
            }
        };
        quotes: {
            links: {
                self: string;
                related: string;
            }
        };
        episodes: {
            links: {
                self: string;
                related: string;
            }
        };
        streamingLinks: {
            links: {
                self: string;
                related: string;
            }
        };
        animeProductions: {
            links: {
                self: string;
                related: string;
            }
        };
        animeCharacters: {
            links: {
                self: string;
                related: string;
            }
        };
        animeStaff: {
            links: {
                self: string;
                related: string;
            }
        }
    }
}
