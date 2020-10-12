

function filterParams(title: string, author: string, language: string): string {
    const filterTitle = title ? `intitle:${title}` : "";
    const filterAuthor= author ? `inauthor:${author}`: "";
    const filterLanguage = language ? `&langRestrict=${language}`: "";
    const filterAuthorTitle= [filterTitle, filterAuthor];
    const filterAuthorTitleString =  (filterAuthorTitle.length > 0) ? `${filterAuthorTitle.join('+')}` : '';  
 
        if (filterLanguage) {
            return `${filterAuthorTitleString}${filterLanguage}`
        } else {
            return filterAuthorTitleString
        }
    
    }
    export default filterParams;

  