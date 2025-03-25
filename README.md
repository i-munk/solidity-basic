# Solidity Basic Study 📚

Solidity 스마트 컨트랙트 기본 문법을 학습하며, 예제 컨트랙트를 직접 작성하고 Hardhat + Ignition을 활용해 테스트넷(Sepolia)에 배포했습니다.

---

## 🔧 기술 스택

- Solidity ^0.8.x
- Hardhat
- Hardhat Ignition (배포 자동화)
- TypeScript
- VSCode

---

## 📂 디렉토리 구조

```bash
/contracts         # 스마트 컨트랙트 코드 (.sol)
/ignition/modules  # Ignition 배포 모듈 (.ts)
/scripts           # Hardhat 배포 스크립트 (.ts)
/test              # 테스트 코드 (.ts)
```

---

## ✅ 학습한 개념별 정리

| 개념 | 컨트랙트 | 테스트 | 배포 모듈 |
|------|----------|--------|------------|
| 문자열 (String)  | `StringBasic.sol`  | ✅ | ✅ |
| 배열 (Array)     | `ArrayBasic.sol`   | ✅ | ✅ |
| 매핑 (Mapping)   | `MappingBasic.sol` | ✅ | ✅ |
| 구조체 (Struct)  | `StructBasic.sol`  | ✅ | ✅ |
| 바이트 (Bytes)   | `BytesBasic.sol`   | ✅ | ✅ |

---

## 🚀 테스트넷 배포 주소 (Sepolia)

| 컨트랙트 | 배포 주소 |
|----------|-----------|
| StringBasic  | `0xb180624D87bBB272A9891011Be56490695d368b2` |
| ArrayBasic   | `0x8eD1f74bC5C32eaDb9C9Eaa5ED036632EB5D1DD9` |
| MappingBasic | `0x22121F7F32BC985bDA42D80c7CF615e5Baa8f3fd` |
| StructBasic  | `0xdE5Dbad56E8157a181581844cAb9515EF0D379DF` |
| BytesBasic   | `0x54f1099065D47B6Fe8A1449f6757743614F29D2A` |

---

## 🧪 테스트 실행 방법

```bash
npx hardhat test
```

---

## 📦 배포 명령어 (Sepolia)

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

> `.env` 파일에 아래와 같은 정보가 있어야 합니다:
>
> ```env
> PRIVATE_KEY=0xabc123...
> SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
> ```

---

## 👨‍💻 작성자

- 임한수
- RocketBoost 블록체인 엔지니어 부트캠프
