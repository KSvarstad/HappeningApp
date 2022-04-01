const model = {

    app: {
        page: 'happening',
    },

    inputs: {

        scrollPositionUsers: 0,
        
        scrollPositionDoneHappenings: 0,
        
        scrollPositionDoneHappeningsAdmin: 0,

        newHappening: {
            name: '',
            },
        
        editHappening: {
            happeningId: null,
            name: '',
        },

        deleteHappening: {
            happeningId: null,
            areYouSure: false,
            id: null,
        },
      
        newUser: {
            name: '',
            points: '',
            isSelected: false,
        },
        
        
        editUser: {
            userId: null,
            name: '',
            points: '',
        },

        
        deleteUser: {
            userId: null,
            name: '',
            areYouSure: false,
        },
        
        deleteDoneHappenings: {
            id: null,
        },

        resetDoneHappenings: {
            areYouSure: false,
        },

        comment: '',

        deleteComment: {
            doneHappeningId: null,
            areYouSure: false,
        },

        drawCount: 1,
        
        drawDate: null,

        doWithinWeek: false,

        doAsap: false,

        doWithinTwoDays: false,
    },

    data: {

        selectAll: false,
        users: [
        
        ],

        userPoints: [
            
            
        ],
        

        happenings: [

           
        ],
        
        doneHappenings: [

    

        ],
    },

}