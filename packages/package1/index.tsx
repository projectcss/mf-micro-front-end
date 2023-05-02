import React from 'react';
import {observer} from 'mobx-react';
import shareStore from 'share-store';

const Component = observer(() => {
    return (
        <div>
            <h1>package1</h1>
        </div>
    );
});

shareStore.register((async () => {
    shareStore.addRoute({
        path: '/package1',
        component: <Component />
    });

    console.log('package1');
})());
