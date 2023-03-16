export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
   // token: 'BQAk4UBkLNDOxilPRjSz-8hNW9d84CyuH0J82eghYTCSUfLB23BcC2xQkeEw1Sh5bMnbJ6OTafCWKWfIGBm1mu8YTCxlxDyXn9gfRlvQS_ImgOoOoa23iJliGtSu3Cj9H0AQHblmXTvrKNIr2QawiTr51o60VnP09rBsogWPUT80aX4oytnvBffIQFBsa80jiEvPxQ0pK_gOz5TWj-6c2Q',
    // spotify: null,
    // discover_weekly: null,
    // top_artists: null,
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET USER':
            return {
                ...state,
                user: action.user,
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token,
                };
                case 'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists: action.playlists,
                    };
                    case 'SET_DISCOVER_WEEKLY':
                        return {
                            ...state,
                            discover_weekly: action.discover_weekly,
                        }
                        case 'SET_TOP_ARTISTS':
                            return {
                                ...state,
                                top_artists: action.top_artists,
                            };
                            case 'SET_ITEM':
                                return {
                                    ...state,
                                    item: action.item,
                                };
                                case 'SET_PLAYING':
                                    return {
                                        ...state,
                                        playing: action.playing,
                                    };
                                    case 'SET_SPOTIFY':
                                        return {
                                            ...state,
                                            spotify: action.spotify,
                                        };
            default:
                return state;
    }
}

export default reducer;