import * as app_service from "./app.service"
// @ponicode
describe("getHello", () => {
    let inst: any

    beforeEach(() => {
        inst = new app_service.AppService()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getHello(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.getHello("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.getHello("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.getHello("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.getHello("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.getHello(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
