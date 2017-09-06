const curry = (fn, ctx) => {
    const len = fn.length
    const _c = ctx || null
    const _f = (self) => {
        return (...arr) => {
            return (...arg) => {
                const _a = [...arr, ...arg]
                return _a.length >= len ? fn.call(_c, ..._a) : self(self)(..._a)
            }
        }
    }
    return _f(_f)()
}

