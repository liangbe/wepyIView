
let prod = process.env.NODE_ENV === 'production';

module.exports = {
    'target': 'dist',
    'source': 'src',
    'wpyExt': '.wpy',
    'compilers': {
        less: {
            'compress': true
        },
        /*sass: {
            'outputStyle': 'compressed'
        },
        postcss: {
            plugins: [
                cssnext({
                    browsers:['iOS 9', 'Android 4.4']
                })
            ]
        },*/
        babel: {
            'presets': [
                'es2015',
                'stage-1'
            ],
            'plugins': [
                'transform-export-extensions',
                'syntax-export-extensions'
            ]
        }
    },
    'plugins': {
        iview: {
            pagePath: 'pages',
            config: {
                inject: true,
                prefix: 'i-',
                px2: false
            }
        }
    }
};
if (prod) {
    // 压缩sass
    module.exports.compilers['sass'] = {'outputStyle': 'compressed'};

    // 压缩less
    module.exports.compilers['less'] = {'compress': true};

    // 压缩js
    module.exports.plugins = {
        'uglifyjs': {
            filter: /\.js$/,

        },
        'imagemin': {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                'jpg': {
                    quality: 80
                },
                'png': {
                    quality: 80
                }
            }
        }
    };
}
