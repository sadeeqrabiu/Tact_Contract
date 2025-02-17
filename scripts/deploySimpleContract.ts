import { toNano } from '@ton/core';
import { SimpleContract } from '../wrappers/SimpleContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const simpleContract = provider.open(await SimpleContract.fromInit());

    await simpleContract.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(simpleContract.address);

    // run methods on `simpleContract`
}
