import React from 'react';
import shareStore from 'share-store';
import {observer} from 'mobx-react';

const Component = observer(() => {
    return (
        <div>
            <h1>package2</h1>
        </div>
    );
});

shareStore.register((async () => {
    shareStore.addRoute({
        path: '/package2',
        component: <Component />
    });
    console.log('package2');
})());
