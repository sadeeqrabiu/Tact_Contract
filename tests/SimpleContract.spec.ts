import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { SimpleContract } from '../wrappers/SimpleContract';
import '@ton/test-utils';

describe('SimpleContract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let simpleContract: SandboxContract<SimpleContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        simpleContract = blockchain.openContract(await SimpleContract.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await simpleContract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: simpleContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and simpleContract are ready to use
    });
});
