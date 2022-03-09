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
        
        deleteDoneHappenings: {
            id: null,
        },

        resetDoneHappenings: {
            areYouSure: false,
        },

    },

    data: {

        selectAll: false,
        users: [
            {id: 1, name:'Hans Victor', isSelected: false, },
            {id: 2, name:'Arild', isSelected: false, },
            {id: 3, name:'Richard', isSelected: false, },
            {id: 4, name:'Jens', isSelected: false, },
            {id: 5, name:'Sindre', isSelected: false, },
            {id: 6, name:'Anders H', isSelected: false, },
            {id: 7, name:'Bjørn', isSelected: false, },
            {id: 8, name:'Vegard', isSelected: false, },
            {id: 9, name:'Matthias', isSelected: false, },
            {id: 10, name:'Edgar', isSelected: false, },
            {id: 11, name:'Charlotte', isSelected: false, },
            {id: 12, name:'Jørn', isSelected: false, },
            {id: 13, name:'Jeanette', isSelected: false, },
            {id: 14, name:'Kay', isSelected: false, },
            {id: 15, name:'Steinar J', isSelected: false, },
            {id: 16, name:'Fredrik', isSelected: false, },
            {id: 17, name:'Nicolai', isSelected: false, },
            {id: 18, name:'Helene', isSelected: false, },
            {id: 19, name:'Milad', isSelected: false, },
            {id: 20, name:'Kjetil', isSelected: false, },
            {id: 21, name:'Emil', isSelected: false, },
            {id: 22, name:'Espen', isSelected: false, },
            {id: 23, name:'Rune', isSelected: false, },
            {id: 24, name:'Steinar S', isSelected: false, },
        ],

        userPoints: [
            {userId: 1, happeningId: 1, points: 8},
            {userId: 2, happeningId: 1, points: 8},
            {userId: 3, happeningId: 1, points: 8},
            {userId: 4, happeningId: 1, points: 8},
            {userId: 5, happeningId: 1, points: 6},
            {userId: 6, happeningId: 1, points: 6},
            {userId: 7, happeningId: 1, points: 6},
            {userId: 8, happeningId: 1, points: 6},
            {userId: 9, happeningId: 1, points: 6},
            {userId: 10, happeningId: 1, points: 6},
            {userId: 11, happeningId: 1, points: 6},
            {userId: 12, happeningId: 1, points: 6},
            {userId: 13, happeningId: 1, points: 6},
            {userId: 14, happeningId: 1, points: 6},
            {userId: 15, happeningId: 1, points: 6},
            {userId: 16, happeningId: 1, points: 6},
            {userId: 17, happeningId: 1, points: 6},
            {userId: 18, happeningId: 1, points: 6},
            {userId: 19, happeningId: 1, points: 6},
            {userId: 20, happeningId: 1, points: 6},
            {userId: 21, happeningId: 1, points: 6},
            {userId: 22, happeningId: 1, points: 6},
            {userId: 23, happeningId: 1, points: 6},
            {userId: 24, happeningId: 1, points: 6},
            
        ],
        

        happenings: [
            {
                id: 1, 
                name:'Kahoot',
                isSelected: false,
            }, 
           
        ],
        
        doneHappenings: [
            
        ],
    },

}