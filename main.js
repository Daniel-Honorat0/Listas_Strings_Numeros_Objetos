let frutas= [];
let laticinios= [];
let congelados= [];
let doces= [];
let bebidas= [];

function removerDaLista(removerAlimento){
    frutas.splice(frutas.indexOf(removerAlimento), 1);
    laticinios.splice(laticinios.indexOf(removerAlimento), 1);
    congelados.splice(congelados.indexOf(removerAlimento), 1);
    doces.splice(doces.indexOf(removerAlimento), 1);
    bebidas.splice(bebidas.indexOf(removerAlimento), 1);
}

while (true){
    const inicio= prompt('Você deseja adicionar um item na sua lista de compras? [sim] ou [não] \n'
        + 'Quer remover algo? Digite (Remover).' );

    if (['sim', 'Sim'].includes(inicio) ){

        const adicionarItem = prompt('Qual item você que adicionar?');

        const tipoItem = prompt('Esse item faz parte de qual categoria? \n'
        + '1 = Frutas \n'
        + '2 = Laticínios \n'
        + '3 = Congelados \n'
        + '4 = Doces \n'
        + '5 = Bebidas');
    
        if (tipoItem == 1){
        frutas.push(adicionarItem);
        alert( ` ${adicionarItem} adicionada/o a Frutas`);
        }

        else if (tipoItem == 2){
        laticinios.push(adicionarItem);
        alert( ` ${adicionarItem} adicionada/o a Laticínios`);
        }

        else if (tipoItem == 3){
        congelados.push(adicionarItem);
        alert( ` ${adicionarItem} adicionada/o a Congelados`);
        }

        else if (tipoItem == 4){
        doces.push(adicionarItem);
        alert( ` ${adicionarItem} adicionada/o a Doces`);
        }

        else if (tipoItem == 5){
        bebidas.push(adicionarItem);
        alert( ` ${adicionarItem} adicionada/o a Bebidas`);
        }

        else {
            alert('Categoria não encontrada!');
        }

    }

    else if (['nao', 'não', 'Nao', 'Não'].includes(inicio) ) {
        alert('Até a próxima, aqui esta sua lista: \n'
        
            + `Frutas: ${frutas.join(', ')}  \n` 
            + `Laticínios: ${laticinios.join(', ')} \n`
            + `Congelados: ${congelados.join(', ')} \n`
            + `Doces: ${doces.join(', ')} \n`
            + `Bebidas: ${bebidas.join(', ')}`);
        break;
    }

    else if (['remover', 'Remover'].includes(inicio)){
        let removerAlimento = prompt('Qual item deseja remover? \n'
            + 'Lista de compras: \n'
            + `Frutas: ${frutas.join(', ')} \n`
            + `Laticínios: ${laticinios.join(', ')} \n`
            + `Congelados: ${congelados.join(', ')} \n`
            + `Doces: ${doces.join(', ')} \n`
            + `Bebidas: ${bebidas.join(', ')} \n`);
    
    
        if (removerAlimento !== '' ){
            const encontraNaLista = frutas.includes(removerAlimento) || laticinios.includes(removerAlimento) || congelados.includes(removerAlimento) || doces.includes(removerAlimento) || bebidas.includes(removerAlimento)
            if (encontraNaLista){
                removerDaLista(removerAlimento);
                alert('Item removido com sucesso!');
            }
            
            else {
                alert('Item não encontrado! \n'
                + 'Digite uma opção válida');
            }
        } 
        
        else {
            alert('Qual intem deseja remover?')
        }
    }
}