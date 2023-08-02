import { render, screen } from '@testing-library/react';

import { MenuResume } from './';

describe('Componente MenuResume', () => {
    test('Deve renderizar corretamente os valores de entrada, saída e total', () => {
        const props = {
            entradas: 1000,
            saidas: 500,
            total: 500,
        };

        render(<MenuResume {...props} />);

        expect(screen.getByText(/Entradas/i).nextSibling).toHaveTextContent('R$ 1000,00');
        expect(screen.getByText(/Saídas/i).nextSibling).toHaveTextContent('R$ 500,00');
        expect(screen.getByText(/Total/i).nextSibling).toHaveTextContent('R$ 500,00');
    });
});
