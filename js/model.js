const model = {

    app: {
        page: 'happening',
    },

    inputs: {

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
        
        resetDoneHappenings: {
            areYouSure: false,
        },

    },

    data: {

        selectAll: false,
        users: [
            {id: 1, name:'James', isSelected: false, },
            {id: 2, name:'Bond', isSelected: false, },
        ],

        userPoints: [
            {userId: 1, happeningId: 1, points: 1},
            {userId: 2, happeningId: 1, points: 1},
            {userId: 1, happeningId: 2, points: 1},
            {userId: 2, happeningId: 2, points: 1},
        ],
        

        happenings: [
            {
                id: 1, 
                name:'Kahoot',
                isSelected: false,
            }, 
            {
                id: 2, 
                name:'Rense kaffemaskin',
                isSelected: false,
            }, 
        ],

        
        doneHappenings: []
    },

}