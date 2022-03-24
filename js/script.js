updateView()
        function updateView(){
            const page = model.app.page;
            if(page === 'happening') updateViewHappenings();
            else if(page === 'login') loginView();
            else if(page === 'details') updateDetailsView(); 
            else if(page === 'deleteComment') deleteCommentView();
            setScrollPositionUsers(model.inputs.scrollPositionUsers)
            setScrollPositionDoneHappenings(model.inputs.scrollPositionDoneHappenings)
            
        }

        function updateAdminView(){
            const page = model.app.page;
            if(page === 'admin') updateAdminViewHome();
            else if(page === 'happeningsAdmin') updateAdminViewHappenings();
            else if(page === 'editUser') updateViewUserEdit();
            else if(page === 'editHappening') updateViewHappeningEdit();
            else if(page === 'deleteUser') updateViewDeleteUser();
            else if(page === 'deleteHappening') updateViewDeleteHappening();
            else if(page === 'resetHappenings') resetHappeningsView();
            else if(page === 'login') loginView();
            else if(page === 'details') updateDetailsView();
            else if(page === 'deleteCommentAdmin') deleteCommentViewAdmin(); 
            setScrollPositionDoneHappeningsAdmin(model.inputs.scrollPositionDoneHappeningsAdmin)

        }
