/*
 * MIT License
 *
 * Copyright (c) 2021 Gardel <sunxinao@hotmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

'use strict';

const db = require.main.require('./src/database');

const plugin = {};

plugin.addPost = async (params) => {
	const isAnonymous = await db.getObjectField(`category:${params.data.cid}`, 'isAnonymous');
	console.log(isAnonymous);
	if (isAnonymous) {
		params.post.uid = 0;
		params.data.uid = 0;
	}
	return params;
};

plugin.addTopic = async (params) => {
	const isAnonymous = await db.getObjectField(`category:${params.topic.cid}`, 'isAnonymous');
	console.log(isAnonymous);
	if (isAnonymous) {
		params.topic.uid = 0;
	}
	return params;
};

module.exports = plugin;
