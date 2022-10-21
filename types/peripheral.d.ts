/** @noSelfInFile */
declare namespace peripheral {
    /** 
    * Provides a list of all peripherals available
     */
    function getNames(): string[]
    /**
     * Determines if a peripheral is present with the given name.
     */
    function isPresent(name: string): boolean
    /**
     * Get the types of a named or wrapped peripheral
     */
    function getType(peripheral: string | LuaTable): string
    /**
     * Check if a peripheral is of a particular type
     */
    function hastype(peripheral: string | LuaTable, peripheral_type: string): boolean
    /**
     * Gets all available methods for the peripheral with the given name
     */
    function getMethods(name: string): string[]
    /**
     * Get the name of a peripheral wrapped with peripheral.wrap
     */
    function getName(peripheral: LuaTable): string
    /**
     * Call a method on the peripheral with the given name
     */
    function call(name: string, method: string, args?: string): 1 | 0
    /**
     * Get a table containing all functions available on a peripheral. These can then be called instead of using peripheral.call every time.
     */
    function wrap(name: string): LuaTable
    /**
     * Find all peripherals of a specific type, and return the wrapped peripherals
     */
    function find(type: string, filter?: (name:string, wrapped: LuaTable) => boolean): LuaTable
}
