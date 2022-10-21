/** @noSelfInFile */
declare namespace paintutils {
    /**
     * Parses an image from a multi-line string.
     */
    function parseImage(image: string): string[]
    /**
     * Loads an image from file.
     */
    function loadImage(path: string): string[] | null
    /**
     * Draws a single pixel to the current term at the specified position.
     */
    function drawPixel(xPos: number, yPos: number, color?: number): void
    /**
     * Draws a straight line from the start to end position.
     */
    function drawLine(startX: number, startY: number, endX: number, endY: number, color?: number): void
    /**
     * Draws the outline of a box on the current term from the specified start position to the specified end position.
     */
    function drawBox(startX: number, startY: number, endX: number, endY: number, color?: number): void
    /**
     * Draws a filled box on the current term from the specified start position to the specified end position.
     */
    function drawFilledBox(startX: number, startY: number, endX: number, endY: number, color?: number): void
    /**
     * Draw an image loaded by paintutils.parseImage or paintutils.loadImage.
     */
    function drawImage(image: string[], xPos: number, yPos: number): void
}