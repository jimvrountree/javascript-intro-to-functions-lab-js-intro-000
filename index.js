describe('shout(string)', function shout(string) {
  return string.uppercase()
    it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})
