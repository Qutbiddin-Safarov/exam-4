const form = document.querySelector('#form'),
input = document.querySelector('#inp'),
btn = document.querySelector('#btn'),
content = document.querySelector('.content');

function data(result,word){
    if(result.title){
        content.innerHTML = `
            <h2 class="notFinded">Can't find "${word}", please write correct word</h2>
        `
    }else{
        let word = result[0].word,
        phonetic = result[0].phonetic,
        meaning = result[0].meanings[0].definitions[0].definition,
        example = result[0].meanings[0].definitions[0].example,
        using = result[0].meanings[0].definitions[0].definition,
        example_2 = result[0].meanings[0].definitions[0].example,
        using_2 = result[0].meanings[0].definitions[0].definition,
        audio = result[0].phonetics[0].audio;

            
             if(using == undefined){
                using = result[0].meanings[1].definitions[0].definition;
            }else{
                using = "Haven't definition";
            }

            if( example == undefined){
                example = "Haven't example";
            }
            if(phonetic == undefined){
                phonetic = "";
            }
            if( example_2 == undefined || ""){
                example_2 = "Haven't example"
            }
            if(using_2 == undefined || ""){
                using_2 = using_2 = result[0].meanings[1].definitions[0].definition;
            }else{
                using_2 = "Haven't definition"
            }

            if(audio == undefined){
                audio = result[0].phonetics[1].audio;
            }

        content.innerHTML = ""
        content.innerHTML = `
        <h2 class="word">
            ${word} - ${phonetic}
        </h2>
        <p class="meaning">
            ${meaning}
        </p>
        <p class="example">
           Example:  "${example}"
        </p>
        <p class="using">
            "${using}"
        </p>
        <p class="example-2">
            Example:  "${example_2}"
        </p>
        <p class="using-2">
            "${using_2}"
        </p>
        <audio controls autoplay src="${audio}" class="audio"></audio>
        `
        console.log(result);
    }
}

function fetchApi(word){
    word = input.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then( res => res.json()).then(result => data(result, word));
}

function search(){
         fetchApi();
}

input.addEventListener("clicked", e =>{
    if(e.key = 'Enter'){
        fetchApi();
    }
})
