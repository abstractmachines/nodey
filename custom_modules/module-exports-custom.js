
module.exports = {
    adderField: function (x, y) {
        console.log('x: ', x, 'y:', y);
        return x + y;
    },

    envField: function () {
        console.log(
            '\nprocess.env :\n',' process.env',
            '\n process.argv:', process.argv
        );
    }
}
