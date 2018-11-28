function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Isadora Giongo',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            numero: '33303902',
            ddd: 51
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Osvaldo Aranha',
            numero: 333
        })
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log('Usuário', usuario)
}


obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('Erro no USUÁRIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('Erro no TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('Erro no ENDEREÇO', error)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd})${telefone.numero}
            `)
        })
    })
})