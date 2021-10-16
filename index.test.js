const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index("(file format) ([a-zA-Z0-9_\\-]+)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index("definition-checksum\\s(?P<checksum>\\w+)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index("(?:non-capturing)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index("(?P<first_group_name>.*)-(?P<second_group_name>.*)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index("(?P<first_group_name>.*)-(?P=first_group_name)")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
