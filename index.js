(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    //CRUD - CADASTRO DE PRODUTO
    /* 
    //  INSERT
    const novoProduto = Produto.create({
        nome: 'Monitor LED',
        preco: 150,
        descricao: 'AOC 484AX'
    })
    console.log(novoProduto);
  
    //  SELECT
    const produtos = await Produto.findAll({
        where: {
            preco: 30
        }
    }); 
    
    //  UPDATE
    const produto = await Produto.findByPk(1); 
    console.log(produto);
    produto.descricao = 'Fiz uma alteração!';
    await produto.save();

    //  DELETE
    const produto = await Produto.findByPk(3); 
    console.log(produto);
    await produto.destroy();

    // DELETE WHERE
    await Produto.destroy({ where: {
        id: 1
    }})
    */
})();