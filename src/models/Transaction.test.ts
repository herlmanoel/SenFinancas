import { Transaction, TransactionStatus } from './Transaction';

describe('Classe Transaction', () => {
    const transactionData = {
        id: 1,
        titulo: 'Teste de Transação',
        tipo: TransactionStatus.INPUT,
        idCategoria: 100,
        valor: 50.0,
    };

    test('getValor() retorna o valor correto para a transação INPUT', () => {
        const transaction = new Transaction(
            transactionData.id,
            transactionData.titulo,
            transactionData.tipo,
            transactionData.idCategoria,
            transactionData.valor
        );
        expect(transaction.getValor()).toBe(transactionData.valor);
    });

    test('getValor() retorna o valor correto para a transação OUTPUT', () => {
        const transaction = new Transaction(
            transactionData.id,
            transactionData.titulo,
            TransactionStatus.OUTPUT,
            transactionData.idCategoria,
            transactionData.valor
        );
        expect(transaction.getValor()).toBe(-transactionData.valor);
    });

    test('getValorFormat() retorna o valor formatado para a transação INPUT', () => {
        const transaction = new Transaction(
            transactionData.id,
            transactionData.titulo,
            transactionData.tipo,
            transactionData.idCategoria,
            transactionData.valor
        );
        expect(transaction.getValorFormat()).toBe(`R$ ${transactionData.valor.toFixed(2).replace(".", ",")}`);
    });

    test('getValorFormat() retorna o valor formatado para a transação OUTPUT', () => {
        const transaction = new Transaction(
            transactionData.id,
            transactionData.titulo,
            TransactionStatus.OUTPUT,
            transactionData.idCategoria,
            transactionData.valor
        );
        expect(transaction.getValorFormat()).toBe(`R$ - ${transactionData.valor.toFixed(2).replace(".", ",")}`);
    });

    test('getTipoFormat() retorna "Entrada" para a transação INPUT', () => {
        const transaction = new Transaction(
            transactionData.id,
            transactionData.titulo,
            transactionData.tipo,
            transactionData.idCategoria,
            transactionData.valor
        );
        expect(transaction.getTipoFormat()).toBe('Entrada');
    });

    test('getTipoFormat() retorna "Saída" para a transação OUTPUT', () => {
        const transaction = new Transaction(
            transactionData.id,
            transactionData.titulo,
            TransactionStatus.OUTPUT,
            transactionData.idCategoria,
            transactionData.valor
        );
        expect(transaction.getTipoFormat()).toBe('Saída');
    });
});

describe('Enum TransactionStatus', () => {
    test('Os valores devem corresponder aos seus valores de string atribuídos', () => {
        expect(TransactionStatus.ALL).toBe('ALL');
        expect(TransactionStatus.INPUT).toBe('INPUT');
        expect(TransactionStatus.OUTPUT).toBe('OUTPUT');
    });
});
