//task 1 Добавьте пункт к выпадающему списку
//in index.html
//<select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>


    let selectedOption = genres.options[genres.selectedIndex];
    alert( selectedOption.value );
    alert( selectedOption.text );

    let newOption = new Option("Классика", "classic");
    genres.append(newOption);

    newOption.selected = true;
