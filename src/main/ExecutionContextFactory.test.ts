import { App } from "electron";
import { ExecutionContextFactory } from "./ExecutionContextFactory";

describe(ExecutionContextFactory, () => {
    const electronApp = <App>{ getPath: (name) => name };

    describe(ExecutionContextFactory.fromElectronApp, () => {
        it("should set the right constructor properties", () => {
            const executionContext = ExecutionContextFactory.fromElectronApp(electronApp);
            expect(executionContext.executablePath).toBe("exe");
            expect(executionContext.temporaryDirectoryPath).toBe("temp");
            expect(executionContext.userDataPath).toBe("userData");
            expect(executionContext.userHomePath).toBe("home");
        });
    });
});
