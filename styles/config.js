/* ------------------------------------------------------------------- */
/* Sheet ID
/* Your sheet ID
/* ------------------------------------------------------------------- */
let sheetID = "1VxJEkx8qnLhr-mLhuFKb-p0GD-Fx67M9UqOKsuyva88";


/* ------------------------------------------------------------------- */
/* All sheet pages
/* ------------------------------------------------------------------- */
let sheetPages = {

    mainMasterlist: "main masterlist",
    mainMasterlistLog: "main masterlist log",
    petsMasterlist: "pets masterlist",
    petsLog: "pets log",
    faq: "faq",
    staff: "mods",

}


/* ------------------------------------------------------------------- */
/* All Site Options
/* ------------------------------------------------------------------- */
let options = {


    /* Index
    /* --------------------------------------------------------------- */
    index: {

        promptSheetPage: sheetPages.prompts,
        numOfPrompts: 3,

        staffSheetPage: sheetPages.staff,
        numOfStaff: 8,

        mainMasterlistSheetPage: sheetPages.mainMasterlist,
        numOfMainDesigns: 8,

        petsMasterlistSheetPage: sheetPages.petsMasterlist,
        numOfPetDesigns: 4,
    
    },


    /* Main Masterlist
    /* --------------------------------------------------------------- */
    mainMasterlist: {

        sheetPage: sheetPages.mainMasterlist,
        logSheetPage: sheetPages.mainMasterlistLog,

        itemAmount: 12,
        itemOrder: "desc",

        filterColumn: 'Design Type',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',

    },


    /* Pets Masterlist
    /* --------------------------------------------------------------- */
    petsMasterlist: {
        
        sheetPage: sheetPages.petsMasterlist,
        logSheetPage: sheetPages.petsLog,

        itemAmount: 12,
        itemOrder: "desc",

        filterColumn: 'Customisation',
        searchFilterParams: ['ID', 'Owner', 'Designer', 'Artist'],
        fauxFolderColumn: 'Species',
    
    },


    /* Staff
    /* --------------------------------------------------------------- */
    staff: {
    
        sheetPage: sheetPages.staff,
    
    },


    /* FAQ
    /* --------------------------------------------------------------- */
    faq: {
    
        sheetPage: sheetPages.faq,
    
        itemAmount: 24,
        itemOrder: "desc",
    
        searchFilterParams: ['Tags'],
    
    },


}
