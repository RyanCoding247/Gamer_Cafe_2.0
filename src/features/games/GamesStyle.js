
export const GamesStyle = (test) => {
    console.log(test);
    
    if(test==='gluten'){
        return 'highlightSF'
    } else if(test==='soy') {
        return 'highlightDF'
    } else {
        return null
    }
}
