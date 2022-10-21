/** @noSelfInFile */
declare namespace gps {
    /**
     * The channel which GPS requests and responses are broadcasted on.
     */
    const CHANNEL_GPS = 65534
    /**
     * Tries to retrieve the computer or turtles own location.
     */
    function locate(timeout?: number | 2, debug?: boolean | false): number[] | null
}