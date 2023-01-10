import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import styles from './ItemListContainer.module.css';

export default function ItemListContainer() {
    return (
        <Stack gap={2} className="col-md-3 mx-auto">
            <div className={styles.greeting}>
                Bienvenid@! Encontrá los componentes de pc más buscados.
            </div>
        </Stack>
    );
}