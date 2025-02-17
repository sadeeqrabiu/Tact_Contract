export * from '../build/SimpleContract/tact_SimpleContract';

class SimpleContract {
    static async deploy(): Promise<SandboxContract<SimpleContract>> {
        const contract = await SimpleContract.fromInit();
        const blockchain = await Blockchain.create();
        const deployer = await blockchain.treasury('deployer');

        const deployResult = await contract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        if (!deployResult.transactions) {
            throw new Error('Deployment failed');
        }

        return blockchain.openContract(contract);
    }
}
