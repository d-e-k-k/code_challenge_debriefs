//winter d-m 90
//spring m-j 92
//summer 92
//autum 91

function fourSeasons(d) {
    if((d >= 355 && d <= 365) || (d>= 0 && d<=80)){
        return 'Winter Season'
    }else if((d>80 && d<=172)){
        return 'Spring Season'
    }else if(d>172 && d<=264){
        return 'Summer Season'
    }else if(d>264 && d<=355){
        return 'Autumn Season'
    }else{
        return 'The year flew by!';
    }
}

console.log(fourSeasons(357));