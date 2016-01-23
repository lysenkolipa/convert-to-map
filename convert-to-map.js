(function()
{
    "use strict"

    var isArray = Array.isArray

    module.exports = function(value)
    {
        if (typeof value == "string")
        {
            try { value = JSON.parse(value) }
            catch (error) { value = value.split("") }
        }

        if (value == null)
            return new Map

        if (value instanceof Map)
            return value

        if (value[Symbol.toStringTag] == "Map")
            return value

        if (isArray(value) && value.every(isArray))
            return new Map(value)

        if (typeof value.entries == "function")
            return new Map(value.entries())

        if (typeof value[Symbol.iterator] == "function")
            return new Map(value)

        return new Map(Object.entries(value))
    }
})()
