# 使用带有 Node.js 的基础镜像
FROM node:20.5.1

# 设置工作目录
WORKDIR /app

# 更改 npm 的源为淘宝源
RUN npm config set registry https://registry.npm.taobao.org
RUN yarn config set registry https://registry.npm.taobao.org

# 复制 package.json 和 package-lock.json（如果存在）
COPY ../package*.json ./

# 安装项目依赖
RUN yarn install

# 复制项目文件和目录到工作目录
COPY . .

# 暴露端口 5137
EXPOSE 5173

# 启动命令
CMD ["yarn", "dev"]
