import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from './';

describe('Componente Home', () => {
    test('Deve exibir a mensagem "Clique no botão abaixo e adicione uma transação!" quando não houver transações', () => {
        render(<Home />);

        expect(screen.getByText(/clique no botão abaixo e adicione uma transação!/i)).toBeInTheDocument();
    });
});
