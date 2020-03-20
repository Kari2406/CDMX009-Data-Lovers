// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
import data from './data/patient/patient.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';


/*   const patients = data.entry[1].resource.communication[0].language.coding;s */
//nuevo objeto con la data filtrada


  export let cleanData = [];
  
  // 1.- Accedemos al objeto entry, lista de pacientes y recorrmos cada elemento
  data.entry.forEach(recorrer)

 //2.- función que recibe c/item y aacedemos a los datos que queremos y los almacenamos en un objeto nuevo, y a ese objeto nuevo lo metemos dentro de un array 
  function recorrer(item){
    let obj = {
      id: item.resource.id,
      name: item.resource.name[0].given[0]+" "+item.resource.name[0].family[0],
      gender: item.resource.gender,
      birthDate: item.resource.birthDate,
      maritalStatus: item.resource.maritalStatus.text,
      phone: item.resource.telecom[0].value,
      language: item.resource.communication[0].language.coding[0].display,
      etnia: item.resource.extension[1].valueCodeableConcept.coding[0].display,
      address: item.resource.address[0].line[0]+", "+item.resource.address[0].city+", "+item.resource.address[0].state+", "+item.resource.address[0].postalCode,
      death: item.resource.deceasedDateTime,
    }
    cleanData.push(obj)
  }
  //

  
 