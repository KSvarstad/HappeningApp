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
            {id: 1, name:'Terje', isSelected: false, },
            {id: 2, name:'Kristian', isSelected: false, },
            {id: 3, name:'Kine', isSelected: false, },
            {id: 4, name:'Andreas', isSelected: false, },
            {id: 5, name:'Atle', isSelected: false, },
            {id: 6, name:'Mats', isSelected: false, },
            {id: 7, name:'Eskil', isSelected: false, },
        ],

        userPoints: [
            {userId: 1, happeningId: 1, points: 1},
            {userId: 2, happeningId: 1, points: 1},
            {userId: 3, happeningId: 1, points: 1},
            {userId: 4, happeningId: 1, points: 1},
            {userId: 5, happeningId: 1, points: 1},
            {userId: 6, happeningId: 1, points: 1},
            {userId: 7, happeningId: 1, points: 1},
            {userId: 1, happeningId: 2, points: 1},
            {userId: 2, happeningId: 2, points: 1},
            {userId: 3, happeningId: 2, points: 1},
            {userId: 4, happeningId: 2, points: 1},
            {userId: 5, happeningId: 2, points: 1},
            {userId: 6, happeningId: 2, points: 1},
            {userId: 7, happeningId: 2, points: 1},
            {userId: 1, happeningId: 3, points: 1},
            {userId: 2, happeningId: 3, points: 1},
            {userId: 3, happeningId: 3, points: 1},
            {userId: 4, happeningId: 3, points: 1},
            {userId: 5, happeningId: 3, points: 1},
            {userId: 6, happeningId: 3, points: 1},
            {userId: 7, happeningId: 3, points: 1},
            {userId: 1, happeningId: 4, points: 1},
            {userId: 2, happeningId: 4, points: 1},
            {userId: 3, happeningId: 4, points: 1},
            {userId: 4, happeningId: 4, points: 1},
            {userId: 5, happeningId: 4, points: 1},
            {userId: 6, happeningId: 4, points: 1},
            {userId: 7, happeningId: 4, points: 1},
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
            {
                id: 3, 
                name:'Ta ut av oppvaskmaskin',
                isSelected: false,
            }, 
            {
                id: 4, 
                name:'Sette inn i oppvaskmaskin',
                isSelected: false,
            }, 
        ],

        
        doneHappenings: []
    },

}