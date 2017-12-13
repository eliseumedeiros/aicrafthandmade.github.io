var produtos = [];
var carrinhos = [];
var login = "";
var numCarrinhoAtual;
function produto(codigo, foto, nome, descricao, preco, peso){
	this.codigo = codigo;
	this.foto = foto;
	this.nome = nome;
	this.descricao = descricao;
	this.preco = preco;
	this.peso = peso;
}

function carrinho(dono, prodcar){
	this.dono = dono;
	this.prodcar=prodcar;
	for (var i = 0; i < 15; i++) {
		 this.prodcar[i]=0;
	}
	this.tamanho = 0;
	this.addProduto = function(value){this.prodcar[value]++; this.tamanho++;};
	this.getTamanhoCarrinho = function(){return this.tamanho;};
	this.getProdCar = function(){return this.prodcar;};
}
	
function valorTotalItem(prod, qtd){
	return prod.preco*qtd*prod.peso;
}
function valorTotalAPagar(carrinho){
	soma = 0;
	for (var i = 0; i < carrinho.prodcar.length; i++) {
		soma +=valorTotalItem(produtos[i], carrinho.prodcar[i]);
	}
	return soma;
}
function valorPesoTotal(carrinho){
	soma = 0;
	for (var i = 0; i < carrinho.prodcar.length; i++) {
		soma +=produtos[i].peso * carrinho.prodcar[i];
	}
	return soma;
}
function somarItens(produtos){
	var soma = 0;
	for (var i = 0; i < produtos.length; i++) {
		soma += valorTotalItem(produtos[i]); 
	}
}

function produtosCadastrados(){
	produtos[0] = new produto(0,'rs/img/produtos/produto1.jpeg','AC Mala De Viagem Artesanal Em Couro Legítimo',
		'Mala Sacola de Viagem de Couro Legítimo- frete grátis para todo o Brasil- produto com garantiaCores disponíveis a pronta entrega: Preto, Vinho e Café',
		 299.99, 1.5);
	produtos[1] = new produto(1,'rs/img/produtos/produto2.jpeg', 'AC Bolsa De Lona Mala De Viagem ',
		'Mala de viagem Adventure Loker largadão original super ofertaMala de viagem Adventure Loker é uma de nossas malas com maior espaço interno praticidade e conforto ao viajar.',
		 215.99, 1.2);
	produtos[2] = new produto(2,'rs/img/produtos/produto3.jpeg', 'AC Toupons 20.8\" Grandes Compartimentos ','bolsa perfeita para grandes viagens, completa, com diversos bolsos extras para sua comodidade e bem estar.', 275.64, 2);
	produtos[3] = new produto(3,'rs/img/produtos/produto4.jpeg', 'AC Bolsa De Lona',
		'Mala de viagem Adventure Loker largadão original super ofertaMala de viagem Adventure Loker é uma de nossas malas com maior espaço interno praticidade e conforto ao viajar',
		 193.99, 1.2); 
	produtos[4] = new produto(4,'rs/img/produtos/produto5.jpeg', 'AC Mochila Masculina Couro Legitimo Harley Custom Para Viagem',
		'Mochila de couro legitimo top platinum médio. Com detalhes simples e cores básicas, perfeita para ser usada no dia a dia.',
		 429.99, 0.8);
	produtos[5] = new produto(5,'rs/img/produtos/produto6.jpeg', 'AC Mochila Feminina Estampa Étnica Tecido Artesanal Peruana A3',
		'Muito confortável e totalmente ajustável, adapta-se bem ao corpo.Ótima mochila para escola, trabalho, viagem, lazer, etc.',
		 80.00, 0.6);
	produtos[6] = new produto(6,'rs/img/produtos/produto7.jpeg', 'AC Mochila Escola Juvenil Lona Costa Tecido Artesanal Feminina',
		'Mochila Escola Juvenil Lona Costa Tecido Artesanal Feminina, resustente e com bolsos largos perfeitos para ', 
		70.00, 0.9);
	produtos[7] = new produto(7,'rs/img/produtos/produto8.jpeg', 'AC Carteira de Mão New York Passaporte',
		'Carteira de mão New York Confeccionada de forma artesanal. Ótimo para usar celular, vc pode usar o celular direto, o plástico cristal aceita touch. Porta passaporte, documentos, cartões e dinheiro. Estrutura interna com 2 camadas de nylon 600.',
		 49.99, 0.3);
	produtos[8] = new produto(8,'rs/img/produtos/produto9.jpeg', 'AC Porta Passaporte Mandalas',
		'Porta Passaporte, feito artesanalmente. Ele possui dois bolsos. Comporta um passaporte e do lado esquerdo dois bolsinhos que cabem cartões. Possui um aba para fechar com botão de ímã. ',
		 39.90, 0.25);
	produtos[9] = new produto(9,'rs/img/produtos/produto10.jpeg', 'AC Carteira (Estampa A escolher)',
		'Carteira de tecido 100% algodão, com a estampa que você escolher no nosso mostruário de estampas. Possui 4 divisórias para cartões de crédito, um compartimento para cédulas, 2 compartimentos internos para documentos e 2 compartimentos externos. Fabricação artesanal em dobradura. Fecho em metal. ',
		49.99, 0.3);
	produtos[10] = new produto(10,'rs/img/produtos/produto11.jpeg', 'AC Carteira Andrea Vinci Lanna Café',
		'A Carteira Feminina Lanna tem um formato pequeno e, mesmo assim, possui diversas divisórias e bolsos para facilitar a sua vida. Fabricada inteiramente de modo artesanal em couro, essa carteira é resistente, durável e vai acompanhar você no seu dia a dia, tanto a trabalho quanto a lazer. ',
		 107.07, 0.4);
	produtos[11] = new produto(11,'rs/img/produtos/produto12.jpeg', 'AC Carteira Andrea Vinci Cindy Vermelha',
		'A Carteira Cindy é fabricada inteiramente em couro de forma artesanal, com especial cuidado aos detalhes e acabamentos. Seu formato é retangular, e possui duas divisórias, o que faz desta uma carteira robusta, que será perfeita para as mulheres que levam vários documentos e precisam de diversos compartimentos e bolsos para separação.',
		 139.99, 0.4);
	produtos[12] = new produto(12,'rs/img/produtos/produto13.jpeg', 'AC Carteira Aurora Artesanal em Tecido',
		'Carteira de tecido feita artesanalmente - divisorias para 4 cartões - 3 divisoes para dinheiro - bolso com zíper.',
		80.00, 0.36);
	produtos[13] = new produto(13,'rs/img/produtos/produto14.jpeg', 'AC Maxi Carteira com Alça de Mão Cor Crua',
		'Maxi Carteira com Alça de Mao na cor Crua Uma das mais tradicionais, esse modelo é uma dos mais vendidos, bem básica na cor original da palha. Acabamento com supervisão de qualidade. Forro interno com tecido diferenciado na qualidade.',
		89.90, 0.6);
	produtos[14] = new produto(14,'rs/img/produtos/produto15.jpeg', 'Bolsa Carteira Artestore Alça Bege/Marrom',
		'Palha, tendência nas passarelas internacionais e nacionais, um toque de regionalismo em looks urabanos e moda praia.', 
		89.90, 0.6);
	listarTodosProdutos();
}
function procuraAddLogin(texto){
	for (var i = 0; i < carrinhos.length; i++) {
		if(String(carrinhos[i].dono) == String(texto)){
			numCarrinhoAtual = i;
			return true;
		}
	}
	return false;
}
function listarTodosProdutos(){
	$('#lista-produtos').empty();
	$('#lista-produtos').append("<h1 class='text-left'> Produtos </h1>");
	for (var i = 0; i < produtos.length; i+=3) {
		$('#lista-produtos').append("<div class='row'>");
		for (var j = i, k=0; k < 3; j++, k++) {
			if(j < produtos.length){
				$('#lista-produtos').append("<div class='col-sm-4'>"+
				              				"<div class='card col-xs-12 col-sm-12 bloco-produto'>" +
					              					"<br/><img src='"+produtos[j].foto+"' class='img-responsive card-img-top' alt='Card image cap'>"+
						              					"<div class='card-body'>" +
					              							"<h4 class='preco text-left Card title'>R$ "+produtos[j].preco.toString().replace(".",",")+"</h4>"+
					              							"<p class='nome-produto text-center card-text'>"+produtos[j].nome+"</p>"+
					              							"<button name='adicionar' class='btn btn-default btn-sm' "+" onclick='addProdutoCarrinho("+produtos[j].codigo+")'> <span class='glyphicon glyphicon-plus'></span>Add Produto </button>"+
						              					"</div>"+
	                            					"</div>"+
	                        				"</div>"+
	                        			"</div>");
			}
		}
		$('#lista-produtos').append("</div>" );
	}
}
function addProdutoCarrinho(value){
	if(login===''){
		$("#login-modal").modal();

	}
	else{
		carrinhos[numCarrinhoAtual].addProduto(value);
		atualizarValorCarrinho();
	}
}
function atualizarValorCarrinho(){
	$("#qtd-carrinho").empty();
	$("#qtd-carrinho").append(carrinhos[numCarrinhoAtual].getTamanhoCarrinho());
}

function entrar(){
	produtosCadastrados();
	var valor = $('#enter-nome').val();
	if(!procuraAddLogin(valor)){
		$("#tela-login-mensagem").append("<div class='panel panel-primary'>"+
										"<div class='panel-heading'>Falha</div>"+
										"<div class='panel-body'>Esse usuário não existe no sistema.<//div>"+
										"<br/><button type='button' class='btn btn-danger' data-dismiss='modal' onclick='limparSelecao()'>Fechar</button>"+
									"</div>");
	}
	else{
		login = valor;
		$("#iniciar-sair-topo").empty();
		$("#cadastrar-topo").empty();
		$("#cadastrar-topo").append("<a href='#' data-toggle='modal'><span class='glyphicon glyphicon-user'></span>Olá "+login+" |</a>");
		$("#iniciar-sair-topo").append("<a href='#' data-toggle='modal' onclick='sair()'>"+
										"<span class='glyphicon glyphicon-log-in'></span> SAIR </a>")
		$("#tela-login-mensagem").append("<div class='panel panel-primary'>"+
										"<div class='panel-heading'>Sucesso</div>"+
										"<div class='panel-body'>Agora você está logado no sistema.<//div>"+
										"<br/><button type='button' class='btn btn-danger' data-dismiss='modal' onclick='limparSelecao()'>Fechar</button>"+
									"</div>");
		listarTodosProdutos();
		atualizarValorCarrinho();
	}
	
}
function registrar(){
	var valor = $('#register-nome').val();
	if(!procuraAddLogin(valor)){
		login = valor;
		numCarrinhoAtual = carrinhos.length;
		carrinhos[numCarrinhoAtual] = new carrinho(login, []);
		$("#tela-registro-mensagem").append("<div class='panel panel-primary'>"+
										"<div class='panel-heading'>Sucesso</div>"+
										"<div class='panel-body'>Operação de cadastro realizada com sucesso.<//div>"+
										"<br/><button type='button' class='btn btn-danger' data-dismiss='modal' onclick='limparSelecao()'>Fechar</button>"+
									"</div>");
	}
	else{
		$("#tela-registro-mensagem").append("<div class='panel panel-primary'>"+
										"<div class='panel-heading'>Falha</div>"+
										"<div class='panel-body'>Esse usuário já existe no sistema.<//div>"+
										"<br/><button type='button' class='btn btn-danger' data-dismiss='modal' onclick='limparSelecao()'>Fechar</button>"+
									"</div>");
	}
}
function limparSelecao(){
	$("#tela-registro-mensagem").empty();
	$("#tela-login-mensagem").empty();
}
function sair(){
	login = "";
	numCarrinhoAtual = carrinhos.length;
	$("#iniciar-sair-topo").empty();
	$("#cadastrar-topo").empty();
	$("#cadastrar-topo").append("<a href='#' data-toggle='modal' data-target='#register-modal'><span class='glyphicon glyphicon-user'></span> INSCREVER-SE |</a>")
	$("#iniciar-sair-topo").append("<a href='#' data-toggle='modal' data-target='#login-modal'><span class='glyphicon glyphicon-log-in'></span> INICIAR SESSÃO </a>");
	$("#qtd-carrinho").empty();
	$("#qtd-carrinho").append(0);
}

function listarCarrinho(){
	for (var i = 0; i < carrinho.prodcar.length; i++) {
		carrinho.prodcar[i]
	}
}

function sair(){
	login = "";
	numCarrinhoAtual = carrinhos.length;
	$("#iniciar-sair-topo").empty();
	$("#cadastrar-topo").empty();
	$("#cadastrar-topo").append("<a href='#' data-toggle='modal' data-target='#register-modal'><span class='glyphicon glyphicon-user'></span> INSCREVER-SE |</a>")
	$("#iniciar-sair-topo").append("<a href='#' data-toggle='modal' data-target='#login-modal'><span class='glyphicon glyphicon-log-in'></span> INICIAR SESSÃO </a>");
	$("#qtd-carrinho").empty();
	$("#qtd-carrinho").append(0);
}

function listarTotal(){
	$("#produtos-listar").empty();
	$("#produtos-listar").append("<h3 id='produto_modal'>Produto: </h3>"+
								"<h3 id='quantidade_solicitada'> Quantidade de Produtos Solicitados: "+carrinhos[numCarrinhoAtual].tamanho + "</h3>"+
								"<h3 id='peso-total'>Peso Total(kg): "+ valorPesoTotal(carrinhos[numCarrinhoAtual])+"</h3>"+
								"<h3 id='valor-total-compra'>Valor Total do Item</h3>"+
								"<h2 id='valor-total-a-pagar'> Valor Total a pagar: "+ valorTotalAPagar(carrinhos[numCarrinhoAtual])+"</h2>"+
								"<h3 id='valor-total-itens'> Valor Total dos Ítens:</h3>");
}