/**@noSelfInFile */
declare namespace pocket {
    /**
     * Search the player's inventory for another upgrade, replacing the existing one with that item if found.
     * This inventory search starts from the player's currently selected slot, allowing you to prioritize upgrades.
     */
    function equipBack(): [boolean, string | null]
    /**
     * Remove the pocket computer's current upgrade.
     */
    function unequipBack(): [boolean, string | null]
}